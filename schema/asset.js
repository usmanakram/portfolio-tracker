const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Mongoose model
const { Asset } = require('../models/asset');

// Asset Type
const AssetType = new GraphQLObjectType({
  name: 'Asset',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    symbol: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});

const assets = {
  type: new GraphQLList(AssetType),
  resolve(parent, args) {
    return Asset.find();
  }
};

const asset = {
  type: AssetType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Asset.findById(args.id);
  }
};

// Add an asset
const addAsset = {
  type: AssetType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    symbol: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const asset = new Asset({
      name: args.name,
      symbol: args.symbol,
      description: args.description,
    });

    return asset.save();
  }
};

// Update asset
const updateAsset = {
  type: AssetType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    symbol: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return Asset.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          symbol: args.symbol,
          description: args.description,
        }
      },
      { new: true }
    );
  }
};

// Delete asset
const deleteAsset = {
  type: AssetType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(parent, args) {
    return Asset.findByIdAndRemove(args.id);
  }
};

module.exports = {
  AssetType,
  assets,
  asset,
  addAsset,
  updateAsset,
  deleteAsset,
};