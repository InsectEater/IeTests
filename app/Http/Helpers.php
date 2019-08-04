<?php


namespace App\Http;

use Illuminate\Support\Facades\Auth;

class Helpers {
    public static function jsVariables( string $js_var_name ) {
        $vars = [];
        $vars['jsDateFormat'] = 'yy/mm/dd';
        $vars['csrf_token'] = csrf_token();
        $user = Auth::user();
        if ( $user ) {
            $vars['user']['id'] = $user->id;
            $vars['user']['name'] = $user->name;
            $vars['user']['first_name'] = $user->first_name;
            $vars['user']['last_name'] = $user->last_name;
            $vars['user']['email'] = $user->email;
        }


        return( json_encode( $vars  ) );
    }
}
