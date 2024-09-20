
/*
$("#login-page").submit(function(event) {
    event.preventDefault();
    alert("Login successfull !!");
        window.location.href = "dashboard.html";
    
    }
); */

/*
$('#club-form').click(function() {
    $('#addclubform').show();
});
*/


function showNextForm(nextFormId) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.remove('active'));

    // Show the next form
    const nextForm = document.getElementById(nextFormId);
    nextForm.classList.add('active');
}



$('#clubform').on('submit', function(e) {
    e.preventDefault();
    
   
    var Name = $('#name').val();
    var Age = $('#age').val();
    var NumberofDays= $('#numberofdays').val();
    var Price = $('#price').val();
    
   
    $('#table-data').append(
        `<tr>
            <td>${Name}</td>
            <td>${Age}</td>
            <td>${NumberofDays}</td>
             <td>${Price}</td>
        </tr>`
    );
    
 
    $('#name').val('');
    $('#age').val('');
    $('#numberofdays').val('');
    $('#price').val('');
});














/*
function func(){
    var mail = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    if(mail == 'sushmitha@gmail.com' && pwd == '12345'){
        alert("Successfull!")
         window.location.href("dashboard.html");
        // $('#login-page').hide();
        // $('#dashboard').show();
    }
    else
    alert("Invalid")
}


$('#addclub').click(function() {
    $('#addclubform').show();
});

*/

/* function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Successfull!")
    // Perform validation or AJAX login request here
    // For now, we'll assume login is successful

    window.location.href = "dashboard.html"; // Redirect to main page
}  */

