import { ExitPage } from './registerExit.po';

describe('Estacionamiento salida ', () => {
    let exitPage: ExitPage;
    const placa: string = "URG-585";
    const costo="1000";

    beforeEach(async () => {
        exitPage = new ExitPage();
        await exitPage.navigateTo();
    })

    it('deberia realziar retiro de carro', async () => {

        // Arrange
        const expectedMessage = "se registro la salida del vehiculo: URG-585, con un costo de :"+costo;

        await exitPage.clickBtnRegisterButton(placa);
        await exitPage.waitUntilToastMessageIsPresent();

        // Act
        const toastContent = await exitPage.getToastMessageText()

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

    })
})
