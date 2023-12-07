import { Controller } from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices'

@Controller('mailer')
export class MailerController {

    @EventPattern('booking_created')
    async handleBooking (data: Record<string,unknown>){
        console.log('booking_created',data)
    }
}
