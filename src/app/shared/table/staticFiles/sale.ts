export interface Sales {
	id: number;
	customers: string;
	region: string;
    date: string;
    confirmDate: string;
    confirmation: any;
    quantity: number;
    amount: number;
    preparedBy: string;
    approvedBy: string;
    status: string;
}