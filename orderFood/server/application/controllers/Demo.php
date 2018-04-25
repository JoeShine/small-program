<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller{
    public function index(){
        $this ->json({
            "code" => 0,
            "data" => [
                "msg" => "hello world"
            ]
        });
    }
}