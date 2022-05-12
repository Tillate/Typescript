// function Component(target: any) {
//   console.log(target);
// }
function ComponentFactory({
  template,
  selector,
}: {
  template: string;
  selector: string;
}) {
  const elem = document.querySelector(selector);
  elem.innerHTML = template;
  return (target: any) => {};
}

@ComponentFactory({
  template: "<h1>Hello</h1>",
  selector: "app",
})
class MyComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const foo6 = new MyComponent("jean");
const bar6 = new MyComponent("marie");
