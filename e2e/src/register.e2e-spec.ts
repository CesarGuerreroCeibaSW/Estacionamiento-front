import  { RegisterPage } from './register.po';

describe('Estacionamiento registrar ', () => {
    let registerPage: RegisterPage;
    const placa : string = "URG-585";
    const placaMoto  : string = "URG-586";
    const tipoVehiculoCarro : number = 1;
    const tipoVehiculoMoto : number = 2;

    beforeEach(async () => {
        registerPage = new RegisterPage();
        await registerPage.navigateTo();
      })
    
      it('deberia registrar carro', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + placa + ", con exito";
    
        await registerPage.setTextLicencePlate(placa);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(tipoVehiculoCarro);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 


      it('deberia registrar moto', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + placaMoto + ", con exito";
    
        await registerPage.setTextLicencePlate(placaMoto);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(tipoVehiculoMoto);
        await registerPage.waitUntilDisplacementInput();
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 

      it('no deberia dejar registrar', async () => {

        // Arrange
        const expectedMessage = "El vehiculo ya se encuentra registrado";
    
        await registerPage.setTextLicencePlate(placa);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(tipoVehiculoCarro);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 

      it('no deberia dejar registrar porque le hace falta ingresar datos obligatorios', async () => {

        // Arrange
        const expectedMessage = "Debe ingresar el tipo de vehiculo";
    
        await registerPage.setTextLicencePlate(placa);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(0);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 
})