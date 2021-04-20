import RestApiStorageDataService from '../src/rest-api-storage-data-service';
import IssuesDataStorage from '../src/issues-data-storage';

describe('issues-data-storage.test', () => {

    test('Удаление существующего элемента', async () => {

        //Arrange
        expect.hasAssertions();

        const restApiStorageDataService = new RestApiStorageDataService('http://localhost:3000/issues');
        const issuesDataStorage = new IssuesDataStorage(restApiStorageDataService);
        await issuesDataStorage.init();

        //Act
        const result = await issuesDataStorage.dateteIssueById(1);

        //Assert
        expect(result).toBe(true);

    });

    test('Удаление не существующего элемента', async () => {

        //Arrange
        expect.hasAssertions();

        const restApiStorageDataService = new RestApiStorageDataService('http://localhost:3000/issues');
        const issuesDataStorage = new IssuesDataStorage(restApiStorageDataService);
        await issuesDataStorage.init();

        //Act
        const result = issuesDataStorage.dateteIssueById(666);

        //Assert
        expect(result).toBe(false);

    }); 
    
    test('Не указан id при удалении', async () => {

        //Arrange
        expect.hasAssertions();

        const restApiStorageDataService = new RestApiStorageDataService('http://localhost:3000/issues');
        const issuesDataStorage = new IssuesDataStorage(restApiStorageDataService);
        await issuesDataStorage.init();

        //Act

        //Assert
        expect(() => issuesDataStorage.dateteIssueById()).toThrow('Id should be passed th delete issue');

    });     

})