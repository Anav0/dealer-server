export interface IDbConnectionService{
    connect(): Promise<void>;
}