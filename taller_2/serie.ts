export class Serie {
    link: any;
    constructor(
        public id: number,
        public nombre: string,
        public canal: string,
        public temporadas: number,
        public descripcion: string,
        public website: string,
        public imageUrl: string
    ) {}
} 
