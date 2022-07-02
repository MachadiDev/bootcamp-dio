function getAdmin(map){
    let admins = [];
    for ([key, value] of map) {
        if(value === 'admin'){
            admins.push(key);
        }
        return admins;
    }
}
const funcionarios = new Map();

funcionarios.set('Jorge', 'admin');
funcionarios.set('Gabriel', 'admin');
funcionarios.set('Rodrigo', 'admin');
funcionarios.set('Roberto', 'user');

console.log(getAdmin(funcionarios));