// else if statements

// Validating password
const password = 'paasdasdasdassdss';

if(password.length >= 12){
    console.log('That password is super strong');
}
else if(password.length >= 8){
    console.log('That password is long enough');
}
else{
    console.log('That password is not long enough');
}