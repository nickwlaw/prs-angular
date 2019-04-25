import { Vendor } from './vendor.class';

export class Product {
  id: number;
  vendor: Vendor;
  partNumber: string;
  name: string;
  price: number;
  unit: string;
  photoPath: string;

  constructor(id: number, vendor: Vendor, partNumber: string, name: string, price: number, unit: string, photoPath: string) {
    this.id = id;
    this.vendor = vendor;
    this.partNumber = partNumber;
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.photoPath = photoPath;
  }
}
