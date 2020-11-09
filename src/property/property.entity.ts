import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Booking from '../booking/booking.entity';

@Entity()
class Property {
    @PrimaryGeneratedColumn()
    public property_id!: string;

    @Column()
    public title!: string;

    @Column()
    public vicinity!: string;

    @Column()
    public lat_lon!: string;

    @OneToMany(() => Booking, (booking: Booking) => booking.property)
    public bookings!: Booking[];
}

export default Property;