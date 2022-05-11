// Les Namespaces (optionnel, n'est plus vraiment utilisés)

export namespace Shape {
  export class Circle {}
  export class Square {
      width: number;
      getArea() {
        return this.width * this.width;
      }
  }
}
