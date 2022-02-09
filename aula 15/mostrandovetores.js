let valores = [5,1,7,9,4,2,3]
/*for (con = 0;con < valores.length ; con++){
    console.log(`A posição ${con} tem o valor ${valores[con]}`)
}
*/
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}