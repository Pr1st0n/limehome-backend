import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Property from '../property/property.entity';

@Entity()
class Booking {
    @PrimaryGeneratedColumn()
    public booking_id!: number;

    @Column()
    public customer!: string;

    @Column()
    public arrival_date!: string;

    @Column()
    public departure_date!: string;

    @Column()
    public price!: string;

    @Column()
    public guests!: number;

    @ManyToOne(() => Property)
    @JoinColumn({ name: 'property_id' })
    property!: Property;
}

export default Booking;