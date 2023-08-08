import { Collection, Db } from 'mongodb';

export class DbSet<T> {
  private collection: Collection<Document>;

  constructor(private collectionName: string, private db: Db) {
    this.collection = this.db.collection(this.collectionName);
  }

  async find(filter?: any) {
    if (!filter) filter = {};
    return (await this.collection.find(filter).toArray()) as T[];
  }

  async findOne(filter: any) {
    return (await this.collection.findOne(filter)) as T;
  }

  async updateOne(filter: any, document: T) {
    return await this.collection.updateOne(filter, document);
  }

  async updateMany(filter: any, document: T[]) {
    return await this.collection.updateMany(filter, document);
  }

  async deleteOne(filter: any) {
    return await this.collection.deleteOne(filter);
  }

  async deleteMany(filter: any) {
    return await this.collection.deleteMany(filter);
  }

  async count(filter: any) {
    return await this.collection.countDocuments(filter);
  }

  async truncate() {
    return await this.collection.deleteMany({});
  }

  async insertOne(document: T) {
    return await this.collection.insertOne(document as any);
  }

  async insertMany(param: T[]) {
    return await this.collection.insertMany(param as any[]);
  }
}
