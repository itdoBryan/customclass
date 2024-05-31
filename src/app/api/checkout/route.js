import { NextResponse } from "next/server";
import {Stripe} from 'stripe'

export async function POST (request){
    const stripe = new Stripe("sk_test_51PIj1rH3wmKgI5nzxfQZ4P1wzK7amN3FuopPoedCWT3LA0Z58rG6TCKbXDgiot8cZGi18glwtTL3NMLgBWqeYke70028qZYKhI");
    const {id} = await request.json()
    const sesion = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items:[
            {
                price: id,
                quantity: 1
            }
        ],
        success_url: 'https://customclass.vercel.app/Principal',    
        cancel_url: 'https://customclass.vercel.app/Principal'
    })

    
    return NextResponse.json({
        url: sesion.url
    })
}