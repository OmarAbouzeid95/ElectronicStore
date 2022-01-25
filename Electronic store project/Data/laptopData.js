import laptop from "./laptop.js";

const laptopList = [];

const mac1 = new laptop("mac", "mac 13", "15k", "../laptop photos/mac1.jfif");
laptopList.push(mac1);

const mac2 = new laptop("mac", "mac 11", "10k", "../laptop photos/mac2.jfif");
laptopList.push(mac2);

const mac3 = new laptop("mac", "mac 12", "12k", "../laptop photos/mac3.jfif");
laptopList.push(mac3);

const mac4 = new laptop("mac", "mac X", "8k", "../laptop photos/mac4.jfif");
laptopList.push(mac4);

// lenovos
const lenovo1 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/lenovo1.jfif");
laptopList.push(lenovo1);

const lenovo2 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/lenovo2.jfif");
laptopList.push(lenovo2);

const lenovo3 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/lenovo3.jfif");
laptopList.push(lenovo3);

const lenovo4 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/lenovo4.jfif");
laptopList.push(lenovo4);

//samsung

const samsung2 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/samsung2.jfif");
laptopList.push(samsung2);

const samsung3 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/samsung3.jfif");
laptopList.push(samsung3);

const samsung4 = new laptop("iphone", "iphone 8", "6k", "../laptop photos/samsung4.jfif");
laptopList.push(samsung4);

export default laptopList;
