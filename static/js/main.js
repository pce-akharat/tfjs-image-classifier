let net;

$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();    

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {                                 
                $('#image1').attr('src', reader.result);                                   
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {        
        // Show loading animation
        $(this).hide();
        $('.loader').show();
        app();        
    });
});

async function app() {
    console.log('Loading mobilenet..');
  
    // Load the model.
    net = await mobilenet.load();
    console.log('Sucessfully loaded model');
  
    // Make a prediction through the model on our image.
    const imgEl = document.getElementById('image1');
    const result = await net.classify(imgEl);      
    console.log('Prediction...');    
    console.log(result[0].className);
    $('.loader').hide();
    $('#result').show(); 
    document.getElementById('result').innerHTML = result[0].className;
}