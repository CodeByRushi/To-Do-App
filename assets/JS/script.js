
// this addEventListener  come into action when we clicked on delete button after we checked which list of items need to be deleted
document.getElementById('deleteButton').addEventListener('click',function(){
    console.log("HI");
    let checedvaluew = document.querySelectorAll('.delechack:checked') // getting only checked vale
    console.log(checedvaluew);
    let arrcheck = []  // creating the lsit of checked array
    for(let i of checedvaluew){
        let gg='';
        gg= i.getAttribute('uid')    // getting uniue id from and pushing into array
        console.log(gg)
        arrcheck.push(gg);
    }
    if(arrcheck.length===0){ // checking if array is null the 
        console.log('no item is checked')
        alert("No item is checked!!", "please select item to remove!", "error"); // using show alert to show if there is no items in the array
        return;
    }
    console.log("array is", checedvaluew);
    // here we are making delete request with the help of Ajax request 
    $.ajax({
        type: 'post',
        url: '/delete/?id='+checedvaluew,
        success: function(){ // on ajax sunnces i.e when data is delete
            swal("Item is deleted ", "click ok to go back Home ", "success") // using sweet alert to show the data is delete
            .then(redir => {
                window.location = '/';
            })
           
        },
        error: function(err){ 
            console.log(err);
        }

    });
    console.log("end******");
})