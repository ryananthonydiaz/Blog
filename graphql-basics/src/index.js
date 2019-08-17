import { GraphQLServer } from 'graphql-yoga';
import db from './db';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';

import { arch } from 'os';

// Resolvers (functions that run for each othe operations on our API)

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers: {
		Query,
		Mutation,
		User,
		Post,
		Comment,
	},
	context: {
		db,
	},
});

server.start(() => {
	console.log('The server is up!');
});
