package tech.low.tshirt.backend;

import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.net.RequestOptions;

import java.util.HashMap;
import java.util.Map;

public class TShirtBackend {

    public static void main(String[] args) {
        RequestOptions requestOptions = (new RequestOptions.RequestOptionsBuilder()).setApiKey(System.getProperty("STRIPE_TOKEN", "heck")).build();
        Map<String, Object> chargeMap = new HashMap<>();
        chargeMap.put("amount", 100);
        chargeMap.put("currency", "usd");
        chargeMap.put("source", "tok_1234"); // obtained via Stripe.js
        try {
            Charge charge = Charge.create(chargeMap, requestOptions);
            System.out.println(charge);
        } catch (StripeException e) {
            e.printStackTrace();
        }

    }

}
