export const hideEmail = (email) => {
    const array = email.split('@')
    console.log(array);
    array[0] = array[0].slice(0, 3) + '...' + array[0].slice(-3)

    return array.join('@')

}