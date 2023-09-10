export default function Validate (form, errors, setErrors){
  const updateErrors = {...errors}
    
    if(!form.name) updateErrors.name = 'Name is required'
    else if(form.name.length > 30) updateErrors.name = 'Name is too long'
    else if(form.name.length < 3) updateErrors.name = 'Name is too short'
    else if(typeof form.name !== 'string') updateErrors.name = 'Name is not valid'
    else updateErrors.name = ''

    if(!form.image) updateErrors.image = 'Image is required'
    else if(typeof form.image !== 'string') updateErrors.image = 'Image is not valid'
    else updateErrors.image = ''

    if (!form.height_min) updateErrors.height = 'Minimum height is required'
    else if (!form.height_max) updateErrors.height = 'Maximum height is required'
    else if(form.height_min > form.height_max) updateErrors.height = 'Minimum height cannot be greater than maximum height'
    else if(form.height_min < 0 || form.height_max < 0) updateErrors.height = 'Height is invalid'
    else if(form.height_min > 100 || form.height_max > 100) updateErrors.height = 'Height is invalid'
    else if(form.height_min === form.height_max) updateErrors.height = 'Height cannot be the same'
    else updateErrors.height = ''
    
    if (!form.weight_min) updateErrors.weight = 'Minimum weight is required'
    else if (!form.weight_max) updateErrors.weight = 'Maximum weight is required'
    else if(form.weight_min > form.weight_max) updateErrors.weight = 'Minimum weight cannot be greater than maximum weight'
    else if(form.weight_min < 0 || form.weight_max < 0) updateErrors.weight = 'Weight is invalid'
    else if(form.weight_min > 100 || form.weight_max > 100) updateErrors.weight = 'Weight is invalid'
    else if(form.weight_min === form.weight_max) updateErrors.weight = 'Weight cannot be the same'
    else updateErrors.weight = ''

    if(!form.life_expectancy) updateErrors.life_expectancy = 'Life expectancy is required'
    else updateErrors.life_expectancy = ''

    if(!form.temperaments) updateErrors.temperaments = 'At least one temperament is required'
    else updateErrors.temperaments = ''

    setErrors(updateErrors)
    
}





