class Circle {
    color: string;
    radius?: number;
    constructor(color:string, radius?:number) {
        this.radius=radius;
        this.color=color;

    }
    draw=()=> `draw circle`;
    checkTodraw=()=>{
        if(this.radius && this.radius){
            return this.draw();
        }else{
            return `Enter input`
        }
    }
}

let circle = new Circle('red',40 );
console.log(circle.checkTodraw());