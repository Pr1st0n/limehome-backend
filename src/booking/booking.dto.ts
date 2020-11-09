import { IsNumber, IsString } from 'class-validator';

class CreateBookingDto {
    @IsNumber()
    public property_id!: string;

    @IsString()
    public customer!: string;

    @IsString()
    public arrival_date!: string;

    @IsString()
    public departure_date!: string;

    @IsString()
    public price!: string;

    @IsNumber()
    public guests!: number;
}

export default CreateBookingDto;