(function() {
    CanvasRenderingContext2D.prototype.Pentagon = fucntion (x1,y1,x2,y2,x3,y3,x4,y4,x5,y5)
    {
        this.moveTo(x1, y1);
        this.lineTo(x2, y2);
        this.lineTo(x3, y3);
        this.lineTo(x4, y4);
        this.lineTo(x5, y5);
        this.closePath();
        context.stroke();
        
    }
})();