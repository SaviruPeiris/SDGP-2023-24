const Validation=(values) =>{
    let errors = {}

if (!values.name){
    errors.name="Name Required"
}
else if (values.name.length<5){
    errors.name="Name must be more than 5 characters"
}

if (!values.email){
    errors.email="Email Required"
}

if (!values.password){
    errors.password="Password Required"
}
else if (values.password.length<6){
    errors.password="password must be more than 6 characters"
}



return errors
 
}
export default  Validation;