# Show current match information of BF4 server in Discord

Works by fetching the current information from Battlelog and then sending the data to Discord via Discord Webhook

Uses imageapi from BFStats for generating the scoreboard image: https://github.com/Razer2015/BFStats/tree/dev/imageapi

## Usage:

1. Start imageapi from BFStats with `npm start` (while in imageapi directory)
2. Configure BF4Online by making a copy of `.env.example` and renaming it to `.env` (plus of course changing the values accordingly)
3. Start BF4Online with `npm start` or if developing then with `npm run dev`
4. Make a `POST` request to `http://localhost:3111/renderByGuid/:guid` with appropriate server guid

Example:  
![image](https://github.com/user-attachments/assets/1e2bdb3f-f749-436e-b7ec-dd030ee5a1c2)

One issue is that the image is kind of small in Discord so you have to open it to actually be able to read it. Don't know if there's a way to make it bigger.  
![image](https://github.com/user-attachments/assets/4b7b48ce-7fa1-4ce9-a8b9-8bb79d875e4f)

## Docker

### Building

```
docker build -t xfilefin/bf4online:dev .
```

### Running

```
docker compose up
```
