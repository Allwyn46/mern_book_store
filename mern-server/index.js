const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// MIDDLEWARE
app.use(cors());
app.use(express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MONGODB CONGIG
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri =
    'mongodb+srv://mern_store_manager:UnLyvHsN51c8U0xn@cluster0.xqyymw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //  CREATING A COLLECTION (TABLE LIKE STRUCTURE)
        const bookCollections = client.db('BookInventory').collection('books');

        // INSERTING A BOOK USING POST METHOD
        app.post('/add-book', async (req, res) => {
            try {
                const data = req.body;
                const result = await bookCollections.insertOne(data);
                res.send(result);
                console.log(
                    `A document was inserted with the _id: ${result.insertedId}`
                );
            } catch (error) {
                console.error('Error inserting book:', error);
                res.status(500).send('Error inserting book');
            }
        });

        // GET ALL BOOKS FROM THE DATABASE
        app.get('/get_all_books', async (req, res) => {
            const allBooks = bookCollections.find();
            const result = await allBooks.toArray();
            res.send(result);
        });

        // GET SINGLE BOOK
        app.get('/single-book/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.findOne(filter);
            res.send(result);
        });

        // UPDATE A ALREADY EXISTING BOOK IN THE DATABASE
        app.patch('/book/:id', async (req, res) => {
            const id = req.params.id;
            const updatedBook = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const update = {
                $set: {
                    ...updatedBook,
                },
            };

            const result = await bookCollections.updateOne(
                filter,
                update,
                options
            );
            res.send(result);
        });

        // DELETE A BOOK IN DATABASE
        app.delete('/book-delete/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.deleteOne(filter);
            res.send(result);
        });

        // GET BOOKS ACCORDING TO  THEIR CATEGORY( FILTER )
        app.get('/filter-book', async (req, res) => {
            let query = {};
            if (req.query?.Category) {
                query = {
                    Category: req.query.Category,
                };
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
