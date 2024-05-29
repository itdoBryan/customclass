import { NextResponse } from "next/server";
import {Stripe} from 'stripe'

export async function POST (request){
    const stripe = new Stripe(process.env.SECRET_KEY);
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
        success_url: 'http://localhost:3000/Principal',    
        cancel_url: 'http://localhost:3000/Principal'
    })

    
    return NextResponse.json({
        url: sesion.url
    })
}