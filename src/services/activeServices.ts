import {ICategoryService,} from "./CategoryService/ICategoryService";
import MongoCategoryService from "./CategoryService/MongoCategoryService";
import {IDbConnection, MongoDbConnection} from "./dbConnection";
import {IProductService} from "./ProductService/IProductService";
import MongoProductService from "./ProductService/MongoProductService";
import {IProducerService} from "./ProducerService/IProducerService";
import MongoProducerService from "./ProducerService/MongoProducerService";
// WZORZEC SINGLETON
class ActiveServices {
    /* prywatne pola inicjalizowane w konstruktorze.
     Można by było je wstrzykiwać poprzez jakąś formą Dependency Injection */
    private readonly categoryService: ICategoryService;
    private readonly productService: IProductService;
    private readonly producerService: IProducerService;
    private readonly dbService: IDbConnection;

    constructor() {
        this.categoryService = new MongoCategoryService()
        this.productService = new MongoProductService()
        this.producerService = new MongoProducerService()
        this.dbService = new MongoDbConnection()
    }

    /* Pola można tylko pobrać a nie ponownie nadać im wartość */
    public getCategoryService(): ICategoryService {
      return this.categoryService;
    }

    public getProductService(): IProductService {
        return this.productService;
    }

    public getProducerService(): IProducerService {
        return this.producerService;
    }

    public getDbConnectionService(): IDbConnection {
        return this.dbService;
    }
}

const instance = new ActiveServices();

/* Eksportowana jest konkretna instancja */
export default instance;
