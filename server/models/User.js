const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},

		password: {
			type: String,
			required: true,
		},

		accountType: {
			type: String,
			enum: ["Admin", "Task Owner", "Assigned User"],
			required: true,
		},
		token: {
			type: String,
		},
		TaskList: [
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'TaskList'
			}
		],
		assignedTasks:[
			{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Task'	
			}
		]
		

	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);