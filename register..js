<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-sca
    le=1.0">
    <title>Mercado Liebre</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./public/css/registro.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    
    <!--Include Header-->
    <%- include('../partials/header') %>

    <main>
        <div class="color_especial header">      
                 
            <h2>Registrate</h2>
            <h3>Por favor, completa los siguientes datos:</h3> 
        </div>


        
        <form action="registro" method="POST" enctype="multipart/form-data" id="formulario" class="container1" >   
            <div>   
                <div>
                    <!--nombre del usuario-->
                    <div class="celda">
                        <label for="nombre">Nombre Completo<span class="asterisco">*</span></label>
                        <div>  
                            <input type="text" id="nombre" name="name" class="form-control input" > 
                            <span></span>  
                        
                                <p class="feedback"></p>
                                
                                                               
                        </div>
                        
                    </div>

                    <!--email del usuario-->
                    <div class="celda" id="campos_email">             
                        <label for="email" >Email<span class="asterisco">*</span></label>
                        <div class="input-group flex-nowrap">
                        </div>
                        <input type="email" id="email" name="email" class="form-control input"  id="email">
                        <span></span>
                       
                    </div>

                    <!--imagen de perfil del usuario-->
                    <div class="celda" id="campos_imagen">       
                        <label for="formFile"  class="form-label">Selecciona tu imagen de perfil<span class="asterisco">*</span></label>
                        <div>
                            <input type="file" id="imagen" class="form-control input"  name="imagen" >
                            <span></span>
                        </div>
                    </div>

                              

                    <!--password del usuario-->
                    <div class="celda" id="campos_contraseña">       <!-- FALTA AGREGAR OPCION VER CONTRASEÑA -->
                        <label for="contraseña">Contraseña<span class="asterisco">*</span></label>
                        <div>
                            <input type="password" id="contraseña" class="form-control input" name="password" placeholder="Ej: Contraseña123" >
                            <span></span>
                            
                        </div>
                    </div>

                    
                    <!--confirmar password-->
                    <div class="celda" id="campos_contraseña2">      
                        <label for="confirmar_contraseña">Confirmá contraseña<span class="asterisco">*</span></label>
                        <div>
                            <input type="password" id="confirmar_contraseña" class="form-control input" name="confirmPassword" >
                            <span></span>
                        </div>
                    </div>
                </div>
                
                <!--boton + captcha + redireccion-->
                <div>
                    <!-- falta captcha -->  
                    <button = type="submit" class="boton color_especial">Registrarte</button>                                
                    <p>¿Ya tenes una cuenta? <a href="/user/login" class="color_especial redireccion">Inicia sesión</a><p> 
                </div>
            </div>
        </form>

    </main>
    
    <script src="/js/validacionRegistro.js"></script> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>  
    <script src="/js/menu-hamburguesa.js"></script>
</body>
</html>