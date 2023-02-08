class Node {
    constructor(a,b){
        this.x = a
        this.y = b 
        this.next = null
    }
}
class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(i,j){
        var newNode = new Node(i,j)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}
const stk = new Stack;
function change(element){
    if(element.className == "unblock")
    {
        element.className="block";
    }
    else
    {
        element.className="unblock";
    }
}
function RandomMaze(){
    let ID;
    let i , j;
    for(i=0 ; i <=10 ; i++)
    {
        for(j=0 ; j <=10 ; j++)
        {
            let a = Math.random() * 100;
            i = i + "";
            j = j + "";
            let msg = i + "-" + j;
            ID = document.getElementById(msg);
            if(a >= 50)
            {
                ID.className="block";
            }
        }   
    }
}
function Clear(){
    let i , j;
    for(i=0 ; i <=10 ; i++)
    {
        for(j=0 ; j <=10 ; j++)
        {
            i = i + "";
            j = j + "";
            let msg = i + "-" + j;
            ID = document.getElementById(msg);
            ID.className="unblock";
        }   
    }
}
function DFSMaze(){
    let i , j , msg , ID , k;
    for(i=0 ; i <= 10 ; i++)
    {
        for(j=0 ; j <= 10 ; j++)
        {
            i = i + "";
            j = j + "";
            msg = i + "-" + j;
            ID = document.getElementById(msg);
            ID.className="wall";
        } 
    }
    for(i=0 ; i <= 10 ; i++)
    {
        for(j=0 ; j <= 10 ; j++)
        {
            i = i + "";
            j = j + "";
            msg = i + "-" + j;
            ID = document.getElementById(msg);
            ID.className="unvisited";
            j++;
        }
        i++; 
    }
    DFS(0,0);
    for(i=0 ; i <= 10 ; i++)
    {
        for(j=0; j <= 10 ; j++)
        {
            i = i + "";
            j = j + "";
            msg = i + "-" + j;
            ID = document.getElementById(msg);
            if(ID.className == "bound" || ID.className == "wall")
            {
                ID.className = "block";
            }
            else
            {
                ID.className = "unblock";
            }
        }
    }
}
function DFS(a , b){
    
    let offC , offR , reg;
    let i , j , k , msg , ID , x , y , way = 0;
    offR = [0,2,0,-2];
    offC = [2,0,-2,0]
    reg = [0,0,0,0];
    x = a + "";
    y = b + "";
    msg = a + "-" + b;
    ID = document.getElementById(msg);
    ID.className = "visited"
    for(i = 0 ; i < 4 ; i++)
    {
        x = a + offR[i];
        y = b + offC[i];
        x = x + "";
        y = y + "";
        msg = x + "-" + y;
        ID = document.getElementById(msg);
        if(x >= 0 && x <= 10 && y >= 0 && y <= 10 && ID.className == "unvisited")
        {
            reg[i]++;
            way++
        }
    }
    if(way > 0)
    {
        
        i = Math.floor(Math.random() * 4);
        while(reg[i] == 0)
        {
            i = Math.floor(Math.random() * 4);
        }
        x = a + offR[i];
        y = b + offC[i];
        i = (a + x) / 2;
        j = (b + y) / 2;
        i = i + "";
        j = j + "";
        msg = i + "-" + j;
        ID = document.getElementById(msg);
        ID.className = "visited"
        stk.push(a,b);
        DFS(x,y);
    }
    else
    {
        stk.pop();
        if(a == 0 && b == 0)
        {
            return 0;
        }
        else
        {
            i = stk.first.x;
            j = stk.first.y;
        }
        DFS(i,j);
    }
}