const express = require("express");
const app = express();
const { Family, Asset, AssetFamily } = require("./models/index");
const PORT = 3009;

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

app.get("/", async (req, res) => {
  try {
    const family = await Family.findAll({
      include: Asset,
      order: [["id", "ASC"]],
    });

    res.status(200).json(family);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  const { name, gender, ParentId } = req.body;
  try {
    const data = Family.create({
      name,
      ParentId,
      gender,
    });

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/", async (req, res) => {
  const { id } = req.params;
  try {
    const data = Family.destroy({
      where: {
        id,
      },
    });

    res.status(200).json("success delete family with id " + id);
  } catch (error) {
    console.log(error);
  }
});

app.put("/", async (req, res) => {
  const { name, ParentId, gender } = req.body;
  const { id } = req.params;
  try {
    const data = Family.update(
      {
        name,
        ParentId,
        gender,
      },
      { where: { id } }
    );

    res.status(200).json("success update family with id " + id);
  } catch (error) {
    console.log(error);
  }
});

app.post("/assets", async (req, res) => {
  const { AssetId } = req.body;
  const { FamilyId } = req.params;
  try {
    const data = AssetFamily.create({
      FamilyId,
      AssetId,
    });

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
});

app.put("/assets", async (req, res) => {
  const { AssetId } = req.body;
  const { FamilyId } = req.params;
  try {
    const data = AssetFamily.update(
      {
        AssetId,
      },
      {
        where: {
          FamilyId,
        },
      }
    );

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/asset", async (req, res) => {
  const { AssetId } = req.params;
  try {
    const asset = AssetFamily.findByPk(AssetId);

    const data = AssetFamily.destroy({ where: { id: AssetId } });

    res.status(200).json("success delete asset with id " + asset.id);
  } catch (error) {
    console.log(error);
  }
});


