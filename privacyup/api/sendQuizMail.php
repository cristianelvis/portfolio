<?php
if (
    (isset($_POST['score'])) && 
    (isset($_POST['userName']) && !empty(trim($_POST['userName']))) && 
    (isset($_POST['userEmail']) && !empty(trim($_POST['userEmail']))) && 
    (isset($_POST['userPhone']) && !empty(trim($_POST['userPhone']))) && 
    (isset($_POST['userMessage']) && !empty(trim($_POST['userMessage']))) &&
    (isset($_POST['userCompanySector']) && !empty(trim($_POST['userCompanySector']))) &&
    (isset($_POST['usersNumbersEmployees']) && !empty(trim($_POST['usersNumbersEmployees']))) &&
    (isset($_POST['questions']) && !empty(trim($_POST['questions'])))
) {    
    $userName               = $_POST['userName'];
    $userPhone              = $_POST['userPhone'];
	$userEmail              = $_POST['userEmail'];
    $userMessage            = $_POST['userMessage'];
	$userCompanySector      = $_POST['userCompanySector'];
	$userNumbersEmployees   = $_POST['usersNumbersEmployees'];
	$questions              = json_decode($_POST['questions']);
    $score                  = $_POST['score'];
    $to                     = "cristianelvisdesign@gmail.com";

    $question = '';
    foreach($questions as $q) {
        $question .= '<br><li>Pergunta: <b>'.$q->pergunta.'</b><br>
        Resposta: <b>'.$q->resposta.'</b><br>                           
        Resposta correta: <b>'.$q->correct.'</b>
        </li>';
    }

    $subject      = "Quiz - via site Privacy UP";
    $message      = "<html>
                        <body>
                            <h1>Quiz via site Privacy UP</h1>
                            <p>Score: $score</p>
                            <p>Nome: $userName</p>
                            <p>Telefone: $userPhone</p>
                            <p>E-mail: $userEmail</p>
                            <p>Setor da empresa: $userCompanySector</p>
                            <p>Qtde de funcionários: $userNumbersEmployees</p>
                            <p>Deixe uma mensagem: $userMessage</p>
                            
                            <ol>$question</ol>                           
                        </body>
                    </html>";

    $header       = "From:".$userEmail."\r\n".
                    "Reply-To:".$userEmail."\r\n".
                    "X=Mailer:PHP/".phpversion()."\r\n".
                    "Content-type:text/html; charset=iso-8859-1";
    
    header('Content-Type: application/json');
    
    $s = true; mail($to, $subject, $message, $header);
    exit(json_encode(['message' => $s
        ? 'Dados enviados com sucesso!'
        : 'Algo deu errado, e-mail não enviado...', 
        'redirect' => $s ? '../inicio/quiz-enviada.html' : false]));
}