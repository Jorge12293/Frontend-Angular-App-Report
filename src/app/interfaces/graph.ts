export class Graph {
    label:  string;
    labels: string [];
    values: number [];
    colors: string [];
    constructor(
        label:  string,
        labels: string [],
        values: number [],
        colors: string [],
    ) {
        this.label = label;
        this.labels = labels;
        this.values = values;
        this.colors = colors;
    }
}