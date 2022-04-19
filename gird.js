const girdSize = 42

export function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * girdSize) + 1,
        y: Math.floor(Math.random() * girdSize) + 1
    }
}

export function outsideGrid(position){
    return(
        position.x < 1 || position.x > girdSize ||
        position.y < 1 || position.y > girdSize
    )
}