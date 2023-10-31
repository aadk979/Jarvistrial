
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-A607kOg9mazKTmUZKRiaMTxo",
    apiKey: "sk-G2yBWV9PjkR8yOXHeHiT3BlbkFJ4TNWG6TO0aliLrBjg3TD",
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{role: "user", content: "define javascript"},
    	]
})
            
console.log(completion.data.choices[0].message);
