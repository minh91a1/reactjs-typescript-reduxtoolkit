//@ts-nocheck
import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./index.css";
import Page from "../../components/Page";
import {Button, Col, Menu, MenuProps, Modal, Row, Select} from "antd";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import WebrtcPlayer from "../../components/WebrtcPlayer";
import { CaretDownOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import MenuCamera from "../../components/common/MenuCamera";
import {getAllStream, selectValues} from "../../store/streamSlice";

const ONE_STREAM = "1";
const FOUR_STREAM = "2";
const LiveView: React.FC = () => {
    const dispatch = useAppDispatch();
    const streams = useAppSelector(selectValues);
    const [openRecordMenu, setOpenRecordMenu] = useState(false);
    const [openLayoutMenu, setOpenLayoutMenu] = useState(false);
    const [openSelectLayoutCustomize, setOpenSelectLayoutCustomize] = useState(false);
    const [openKeys, setOpenKeys] = useState([]);
    const [contextMenu, setContextMenu] = React.useState<{
        mouseX: number;
        mouseY: number;
        isNotNull: boolean;
    }>({ mouseX: 0, mouseY: 0, isNotNull: false });
    const [viewMode, setViewMode] = useState<string>(FOUR_STREAM);
    const [streamUrl, setStreamUrl] = useState({
        url1: "",
        url2: "",
        url3: "",
        url4: "",
        url5: "",
        url6: "",
        url7: "",
        url8: "",
        url9: "",
        url10: "",
        url11: "",
        url12: "",
        url13: "",
        url14: "",
        url15: "",
        url16: ""
    });
    const [currentIndex, setCurrentIndex] = useState<number>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllStream());
    }, [dispatch]);

    const rootSubmenuKeys = ["search", "setting", "recorder", "maintenance"];
    let videoContainerRef = useRef(null);

    const recordMenuItems: MenuProps["items"] = [
        {
            label: "検索",
            icon: <img className="icon-22" src="/icons/sidebar/search-play-menu.png" />,
            key: "search",
            children: [
                {
                    key: "search1",
                    label: "ＯＯＯＯ"
                },
                {
                    key: "search2",
                    label: "ＯＯＯＯ"
                },
                {
                    key: "search3",
                    label: "ＯＯＯＯ"
                },
                {
                    key: "search4",
                    label: "ＯＯＯＯ"
                }
            ]
        },
        {
            label: "設定",
            icon: <img className="icon-22" src="/icons/sidebar/settings-menu.png" />,
            key: "setting",
            children: [
                {
                    key: "cameraManagement",
                    label: "カメラ管理"
                },
                {
                    key: "cameraFunction",
                    label: "カメラ機能"
                },
                {
                    key: "recordingSetting",
                    label: "録画設定"
                },
                {
                    key: "storageManagement",
                    label: "ストレージ管理"
                },
                {
                    key: "ioContact",
                    label: "接点入出力"
                },
                {
                    key: "userManagement",
                    label: "ユーザー管理"
                }
            ]
        },
        {
            label: "履歴",
            icon: <img className="icon-22" src="/icons/sidebar/recorder-menu.png" />,
            key: "recorder",
            children: [
                {
                    key: "recorder1",
                    label: "ＯＯＯＯ"
                },
                {
                    key: "recorder2",
                    label: "ＯＯＯＯ"
                }
            ]
        },
        {
            label: "保守",
            icon: <img className="icon-22" src="/icons/sidebar/maintenance-menu.png" />,
            key: "maintenance",
            children: [
                {
                    key: "maintenance1",
                    label: "ＯＯＯＯ"
                }
            ]
        }
    ];

    const onOpenChange: MenuProps["onOpenChange"] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            !contextMenu.isNotNull
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                    isNotNull: true
                }
                :
                {
                    mouseX: 0,
                    mouseY: 0,
                    isNotNull: false
                }
        );
    };

    const handleCloseMenuCam = () => {
        setContextMenu({ mouseX: 0, mouseY: 0, isNotNull: false });
    };

    const setWidth = (position?: number) => {
        switch (viewMode) {
            case ONE_STREAM:
                return 1280;
            case FOUR_STREAM:
                return 640;
        }
    };

    const setHeight = (position?: number) => {
        switch (viewMode) {
            case ONE_STREAM:
                return 720;
            case FOUR_STREAM:
                return 360;
        }
    };

    const setBlockSize = (position?: number) => {
        switch (viewMode) {
            case ONE_STREAM:
                return "block-100";
            case FOUR_STREAM:
                return "block-50";
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: number) => {
        setCurrentIndex(id);
        setIsModalOpen(true);
    };

    const handleSelectStream: MenuProps["onClick"] = e => {
        setStreamUrl(prevState => ({
            ...prevState,
            [`url${currentIndex}`]: e.key
        }));
        setIsModalOpen(false);
    };

    return (
        <Page
            content={
                <div style={{ marginTop: 10 }}>
                    <div className="live-container">
                        <div className="video-info">
                            <Row>
                                camera01
                            </Row>
                            <Row>
                                1280x720
                            </Row>
                            <Row>
                                H.264
                            </Row>
                        </div>
                        <div className="recording-status">
                            <img className="icon-22" src="/icons/recording.png" />
                        </div>
                        <div ref={videoContainerRef} className="video-container" style={{width: 1284, height: 724}}>
                            <div id="block1" className={"space-align-block " + setBlockSize(1)}>
                                {streamUrl.url1 ?
                                    <WebrtcPlayer
                                        url={`http://localhost:8083/stream/${streamUrl.url1}/channel/0/webrtc?${streamUrl.url1}&channel=0`}
                                        width={setWidth(1)}
                                        height={setHeight(1)}
                                        hasClose={true}
                                        onClose={(e) => handleCloseVideo(e, 1)}
                                        onClick={handleContextMenu}
                                        id={"1"}
                                    />

                                    : <Button
                                        shape="circle"
                                        icon={<PlusOutlined/>}
                                        size="large"
                                        onClick={(e) => handleClick(e, 1)}
                                    />}
                            </div>

                            {(viewMode != ONE_STREAM) ?
                                (<div id="block2" className={"space-align-block " + setBlockSize()}>
                                    {streamUrl.url2 ?
                                        <WebrtcPlayer
                                            url={`http://localhost:8083/stream/${streamUrl.url2}/channel/0/webrtc?${streamUrl.url2}&channel=0`}
                                            width={setWidth()}
                                            height={setHeight()}
                                            hasClose={true}
                                            onClose={(e) => handleCloseVideo(e, 2)}
                                            onClick={handleContextMenu}
                                            id={"2"}
                                        />
                                        : <Button
                                            shape="circle"
                                            icon={<PlusOutlined/>}
                                            size="large"
                                            onClick={(e) => handleClick(e, 2)}
                                        />}
                                </div>) : null}
                            {(viewMode != ONE_STREAM) ?
                                (<div id="block3" className={"space-align-block " + setBlockSize()}>
                                    {streamUrl.url3 ?
                                        <WebrtcPlayer
                                            url={`http://localhost:8083/stream/${streamUrl.url3}/channel/0/webrtc?${streamUrl.url3}&channel=0`}
                                            width={setWidth()}
                                            height={setHeight()}
                                            hasClose={true}
                                            onClose={(e) => handleCloseVideo(e, 3)}
                                            onClick={handleContextMenu}
                                            id={"3"}
                                        />
                                        : <Button
                                            shape="circle"
                                            icon={<PlusOutlined/>}
                                            size="large"
                                            onClick={(e) => handleClick(e, 3)}
                                        />}
                                </div>) : null}
                            {(viewMode != ONE_STREAM) ?
                                (<div id="block4" className={"space-align-block " + setBlockSize()}>
                                    {streamUrl.url4 ?
                                        <WebrtcPlayer
                                            url={`http://localhost:8083/stream/${streamUrl.url4}/channel/0/webrtc?${streamUrl.url4}&channel=0`}
                                            width={setWidth()}
                                            height={setHeight()}
                                            hasClose={true}
                                            onClose={(e) => handleCloseVideo(e, 4)}
                                            onClick={handleContextMenu}
                                            id={"4"}
                                        />
                                        : <Button
                                            shape="circle"
                                            icon={<PlusOutlined/>}
                                            size="large"
                                            onClick={(e) => handleClick(e, 4)}
                                        />}
                                </div>) : null}
                        </div>
                        <div className="status-bar-container">
                            <div className="status-bar">
                                <Row style={{ height: 32 }}>
                                    <Col span={18}>

                                    </Col>
                                    <Col span={3}>
                                        <Button
                                            type="text"
                                            icon={<img className="icon-22"
                                                       src="/icons/status-bar/event-bell.png" />}
                                            size="small"
                                        />
                                    </Col>
                                    <Col span={3}>
                                        <Button
                                            type="text"
                                            icon={<img className="icon-22"
                                                       src="/icons/status-bar/abnormal-occurrence.png" />}
                                            size="small"
                                        />
                                    </Col>
                                </Row>
                                <Row className="status-line" />
                                <Row style={{ height: 32 }}>
                                    <Col span={1} />
                                    <Col span={17}>
                                        <img style={{ width: 50 }} src="/icons/secom-logo.png" />
                                    </Col>
                                    <Col span={3}>
                                        <Button
                                            type="text"
                                            icon={<img className="icon-22"
                                                       src="/icons/status-bar/recorder-menu.png" />}
                                            size="small"
                                            onClick={() => setOpenRecordMenu(!openRecordMenu)}
                                        />
                                    </Col>
                                    <Col span={3}>
                                        <Button
                                            type="text"
                                            icon={<img className="icon-22"
                                                       src="/icons/status-bar/layout-change.png" />}
                                            size="small"
                                            onClick={() => setOpenLayoutMenu(!openLayoutMenu)}
                                        />
                                    </Col>
                                </Row>
                                {openLayoutMenu ?
                                    <div className="layout-menu">
                                        <Row style={{ height: 32, alignContent: "center" }}>
                                            <Button
                                                type="text"
                                                icon={<img className="icon-22"
                                                           src="/icons/status-bar/previous.png" />}
                                                size="small"
                                            />
                                            <div style={{ color: "white", alignSelf: "center" }}>
                                                4/16
                                            </div>
                                            <Button
                                                type="text"
                                                icon={<img className="icon-22"
                                                           src="/icons/status-bar/next.png" />}
                                                size="small"
                                            />
                                            <Button
                                                type="text"
                                                icon={<img className="icon-22"
                                                           src="/icons/status-bar/sequential-execution.png" />}
                                                size="small"
                                            />
                                        </Row>
                                        <Row style={{ height: 1, background: "gray" }}></Row>
                                        <div style={{ height: 96 }}>
                                            <Row style={{ textAlign: "center" }}>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/1x1-screen.png" />}
                                                        size="small"
                                                        onClick={() => setViewMode(ONE_STREAM)}
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/2x2-screen.png" />}
                                                        size="small"
                                                        onClick={() => setViewMode(FOUR_STREAM)}
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/3x3-screen.png" />}
                                                        size="small"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row style={{ textAlign: "center" }}>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/4x3-screen.png" />}
                                                        size="small"
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/4x4-screen.png" />}
                                                        size="small"
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/3-display-screen.png" />}
                                                        size="small"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row style={{ textAlign: "center" }}>
                                                <Col span={8}>
                                                    <Button
                                                        type="text"
                                                        icon={<img className="icon-22"
                                                                   src="/icons/status-bar/6-display-screen.png" />}
                                                        size="small"
                                                    />
                                                </Col>
                                                <Col style={{ alignSelf: "end" }} span={16}>
                                                    <Button
                                                        className="btn-setting-layout-customize"
                                                        onClick={() => setOpenSelectLayoutCustomize(!openSelectLayoutCustomize)}
                                                    >
                                                        カスタム
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div> : null}

                                {openSelectLayoutCustomize && openLayoutMenu ?
                                    <div className="select-layout-customize">
                                        <Row style={{ height: 32, alignContent: "center" }}>
                                            <div className="setting-layout-customize-info">
                                                1.
                                            </div>
                                            <Button
                                                type="text"
                                                icon={<CaretDownOutlined />}
                                                size="small"
                                            />
                                        </Row>
                                        <Row style={{ height: 1, background: "gray" }}></Row>
                                        <div className="setting-layout-customize-info-list">
                                            <Row>1.</Row>
                                            <Row>2.</Row>
                                            <Row>3.</Row>
                                            <Row>4.</Row>
                                            <Row>5.</Row>
                                            <Row>6.</Row>
                                        </div>
                                    </div> : null}
                            </div>
                            {openRecordMenu ?
                                <div className="record-bar">
                                    <Row style={{ height: 32, alignContent: "center" }}>
                                        <img className="icon-22" style={{ marginLeft: 5 }}
                                             src="/icons/status-bar/recorder-menu.png" />
                                        <Button
                                            style={{ left: 100 }}
                                            type="text"
                                            icon={<CloseOutlined style={{ fontSize: 22, color: "gray" }} />}
                                            size="small"
                                            onClick={() => setOpenRecordMenu(false)}
                                        />
                                    </Row>
                                    <Menu
                                        theme="dark"
                                        mode="inline"
                                        openKeys={openKeys}
                                        onOpenChange={onOpenChange}
                                        items={recordMenuItems}
                                    />
                                </div> : null}

                        </div>
                    </div>
                    {contextMenu.isNotNull ?
                        <MenuCamera mouseX={contextMenu.mouseX}
                                    mouseY={contextMenu.mouseY}
                                    onClose={handleCloseMenuCam} />
                        : <></>}
                    <Modal
                        title="Select stream"
                        open={isModalOpen}
                        footer={null}
                        onCancel={() => setIsModalOpen(false)}
                    >
                        <Menu
                            items={streams}
                            onClick={(e) => handleSelectStream(e)}
                        />
                    </Modal>
                </div>
            }
        />
    );
};

export default LiveView;
