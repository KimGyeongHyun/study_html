// tsx 에서 module.css 를 사용하기 위한 코드
declare module "*.css" {
    const content : { [className: string]: string};
    export = content;
}