const Query = {
	comments(parent, args, { db }, info) {
		return db.comments;
	},
	posts(parent, args, { db }, info) {
		if (!args.query) {
			return db.posts;
		}

		return db.posts.filter(post => {
			const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
			const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
			return isTitleMatch || isBodyMatch;
		});
	},
	users(parent, args, { db }, info) {
		if (!args.query) {
			return db.users;
		}

		return db.users.filter(user => {
			return user.name.toLowerCase().includes(args.query.toLowerCase());
		});
	},
	me() {
		return {
			id: '123098',
			name: 'Mike',
			email: 'mike@example.com',
		};
	},
	post() {
		return {
			id: '092',
			title: 'GraphQL 101',
			body: 'Oh dang this is my first Post!',
			published: true,
		};
	},
};

export { Query as default };
