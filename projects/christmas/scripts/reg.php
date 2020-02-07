<?php
// имя и фамилия : rozhdestvenskijvecher@gmail.com
// номер : rozdectvo-GO!!!
(new Run())->start();

class Run{
    
    public function start(){
        
        if(isset($_POST['name'])){

            $name = htmlspecialchars($_POST['name']);
            $phone = htmlspecialchars($_POST['phone']);
            
            if($this->isAdmine($name, $phone)){

            	if(isset($_POST['called'])){
            		$called = htmlspecialchars($_POST['called']);
            		$id = htmlspecialchars($_POST['id']);

					$this->changeCalled($called, $id);

            	} else {

            		$this->show();

            	}
                

            } else {
                $this->registred($name, $phone);
            }
            
        } else {
            $massage = "К сожалению, Вы не зарегистрированы.<br>Возникла ошибка в процессе регистрации!";
            include_once 'reg_response.php';
        }
                
    }
    
    public function getConnection(){
        /* prod */
        //$connection = mysqli_connect('127.0.0.1', 'mishadjak', 'dark!2347', 'mishadjak');
        /* test */
        $connection = mysqli_connect('127.0.0.1', 'root', '', 'reg_person');
        return $connection;

    }
    
    public function isAdmine($name, $phone){
        if ($name === 'rozhdestvenskijvecher@gmail.com' && $phone === "rozdectvo-GO!!!"){
            return true;
        }
        return false;
    }
    
    public function registred($name, $phone){
        
        $connection = $this->getConnection();
        
        if(!$connection->error){
            $query = "INSERT INTO people (name, phone, time_of_add) VALUES (?, ?, ?); ";
            $stmt = $connection->stmt_init();
            
            if($stmt->prepare($query)){
                
                $time = time();
                
                $stmt->bind_param('ssi', $name, $phone, $time);
                $stmt->execute();
                $stmt->close();
                
                $massage = "$name, Вы успешно зарегистрированы.<br>Ждем Вас!";
                
            } else {
                $massage = "К сожалению, Вы успешно зарегистрированы.<br>Возникла ошибка!";
            }
        } else {
            $massage = "К сожалению, Вы не зарегистрированы.<br>Возникли проблемы с базой данных!";
        }
        
        $connection->close();
        
        include_once 'reg_response.php';
    }
    
    public function show(){
        
        $connection = $this->getConnection();
        
        if(!$connection->error){
            $query = "SELECT id_person, called, name, phone, time_of_add FROM people";
            $stmt = $connection->stmt_init();
            
            if($stmt->prepare($query)){
                
                $stmt->execute();
                $result = $stmt->get_result();
                $stmt->close();
                
            } else {
                $massage = "К сожалению, Вы успешно зарегистрированы.<br>Возникла ошибка!";
            }
        } else {
            $massage = "К сожалению, Вы не зарегистрированы.<br>Возникли проблемы с базой данных!";
        }
        
        $connection->close();
        
        include_once 'show_users.php';
    }

    public function changeCalled($called, $id){

    	$connection = $this->getConnection();
        
        if(!$connection->error){

            $query = "UPDATE people set ? WHERE id_person = ?";
            $stmt = $connection->stmt_init();
            
            if($stmt->prepare($query)){

            	$called = ($called == '1') ?  '0' : '1';

                $stmt->bind_param('ss', $called, $id);
                $stmt->execute();
                $result = $stmt->get_result();
                $stmt->close();
                
            } else {
                $massage = "К сожалению, Вы успешно зарегистрированы.<br>Возникла ошибка!";
            }
        } else {
            $massage = "К сожалению, Вы не зарегистрированы.<br>Возникли проблемы с базой данных!";
        }
        
        $connection->close();
        
        include_once 'show_users.php';
    }
    
}