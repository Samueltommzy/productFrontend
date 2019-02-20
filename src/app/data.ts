export class Data{
    private _id:string;
    private Name: string;
    private Color: String;
    private Price: String;
    private Image: String;
    private Description: String;

    constructor(_id,Name,Color,Price,Image,Description) {
        this._id = _id;
        this.Name =Name;
        this.Color =Color;
        this.Price =Price;
        this.Image = Image;
        this.Description = Description;
    }
}