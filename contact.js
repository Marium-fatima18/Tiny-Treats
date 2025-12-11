$(function() {
    $(".form").validate({
        rules :{
           name:{
            required:true,
           },
           email:{
            required:true,
            email:true,
           },
           message:{
            required:true,
           },
        },
        messages:{
            name:"*Please enter you name",
            email:"*Enter valid email",
            message:"*Enter your message",
        },
    });
    
});