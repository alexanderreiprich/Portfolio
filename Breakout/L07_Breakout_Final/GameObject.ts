namespace L07_BreakOut_Final {
    import fc = FudgeCore;

    export class GameObject extends fc.Node {

        private static readonly meshQuad: fc.MeshQuad = new fc.MeshQuad();
        //private static readonly mtrSolidWhite: fc.Material = new fc.Material("SolidWhite", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("WHITE")));

        public rect: fc.Rectangle;

        public constructor(_name: string, _position: fc.Vector2, _size: fc.Vector2, _color: string) {

            super(_name);

            let objMaterial: fc.Material = new fc.Material(_color, fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS(_color)));

            this.rect = new fc.Rectangle(_position.x, _position.y, _size.x, _size.y, fc.ORIGIN2D.CENTER);
            this.addComponent(new fc.ComponentTransform(fc.Matrix4x4.TRANSLATION(_position.toVector3(0))));

            let cmpQuad: fc.ComponentMesh = new fc.ComponentMesh(GameObject.meshQuad);
            this.addComponent(cmpQuad);
            cmpQuad.pivot.scale(_size.toVector3(0));

            let cMaterial: fc.ComponentMaterial = new fc.ComponentMaterial(objMaterial);
            this.addComponent(cMaterial);

        }
    }
}