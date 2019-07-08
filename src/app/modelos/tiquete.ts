export class Tiquete {
    public cilindrajeMayor500: boolean;
    public placa: string;
    public tipoVehiculo: string;
    public fechaIngreso: Date;

    constructor(cilindrajeMayor500 = false, placa = '', tipoVehiculo = '') {
        this.cilindrajeMayor500 = cilindrajeMayor500;
        this.placa = placa;
        this.tipoVehiculo = tipoVehiculo;
    }
};