$("#btn-chat").click(function(){
    var date = new Date();
        var input = $('#btn-input').val();
        if(input!=null){
               $('.chat').append('<li class="left clearfix"><span class="chat-img pull-left">'+
                        '<img src="img/avatar.png" alt="User Avatar" class="img-circle" />'+
                        '</span>'+
                        '<div class="chat-body clearfix">'+
                        '<div class="header">'+
                        '<strong class="primary-font">Me</strong> <small class="pull-right text-muted">'+
                        '<span class="glyphicon glyphicon-time"></span>'+date.getHours()+':'+date.getMinutes()+'</small>'+
                        '</div>'+
                        '<p>'+input+'</p></div>'+
                        '</li> ');

            
                $.getJSON("http://sandbox.api.simsimi.com/request.p?key=10e4a191-1b88-4b61-806c-0134917c7f57&lc=vi&ft=1.0&text="+input, function(result){
                    $.each(result, function(i, field){
                        if(i=="response"){
                                    $('.chat').append(' <li class="right clearfix"><span class="chat-img pull-right">'+
                                    '<img src="img/avatar1.jpg" alt="User Avatar" class="img-circle" />'+
                                    '</span>'+
                                    '<div class="chat-body clearfix">'+
                                    '<div class="header">'+
                                    '<small class=" text-muted"><span class="glyphicon glyphicon-time"></span>'+date.getHours()+':'+date.getMinutes()+'</small>'+
                                    '<strong class="pull-right primary-font">Simsimi</strong>'+
                                    '</div>'+
                                    '<p>'+field+'</p> </div>'+    
                                    '</li> ');
                        }
                        
                        
            });
        });
        }
     
});